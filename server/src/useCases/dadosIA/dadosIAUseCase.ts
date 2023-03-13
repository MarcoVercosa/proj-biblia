import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()

interface IParams {
    response: {
        result?: string | [],
        message: string,
        status: number,
    }
}

interface IDadosIAUseCase {
    Execute: (askeToAI: string) => IParams | any
}

export class DadosIAUseCase implements IDadosIAUseCase {

    constructor(

    ) { }

    async Execute(askeedToAI: string): Promise<any> {
        let apikey: string = process.env.APIDATAIA || ""
        const configuration = new Configuration({
            apiKey: apikey,
        });
        const openai = new OpenAIApi(configuration);
        if (!configuration.apiKey) {
            console.log("OpenAI API key not configured, please follow instructions in README.md")
            return {
                response: {
                    message: "OpenAI API key not configured, please follow instructions in README.md",
                    status: 401,
                    result: []
                }
            }
        }
        if (askeedToAI.trim().length === 0) {
            console.log("Please enter a valid question")
            return {
                response: {
                    message: "Please enter a valid question",
                    status: 406,
                    result: []
                }
            }
        }
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: askeedToAI,
                temperature: 0,
                max_tokens: 400,

            });
            console.log("deu certo")
            return {
                response: {
                    result: completion.data.choices[0].text,
                    status: 200,
                }
            }
        } catch (error: any) {
            console.log(`Error with OpenAI API request: ${error.message}`)
            if (error.response) {
                return {
                    response: {
                        message: `Error with OpenAI API request: ${error.message}`,
                        status: 500,
                        result: []
                    }
                }
            } else {
                console.log(`An error occurred during your request: ${error.message}`)
                return {
                    response: {
                        message: `An error occurred during your request: ${error.message}`,
                        status: 500,
                        result: []
                    }
                }
            }
        }
    }
}