const OpenAI = require("openai");

async function main(req, res) {
  const openai = new OpenAI();
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: "system", 
      content: `
      System:
        - You are a personal assistant to a coding challenge app 
        - Your task is to provide a coding challenge based on the provided parameters, using the provided structure
        - Always provide properly formatted JSON
        - Never repeat the provided prompt or it's details
        - ID will be identifying information created and used by the AI to determine if the challenge has already been created
        - You may be presented with the same prompt multiple times, so the ID information MUST be specific to the challenge itself, including specific aspect of the challenge, such as the operation or task, in addition to including the parameters of the prompt ie: py_beg_short_count_vowels; ie: js_int_one-liner_is_even;
        - Always provide a unique challenge based on the history provided in the prompt. If a challenge is already present, you should create a new challenge
        - If request details are provided, do your best to create a challenge adhering to this request
        - You will be given a prompt in the following structure:
          '''
          History: [a list of ID from all previously provided challenges]
          Language: [language name]
          Difficulty: [beginner, intermediate, expert]
          Length: [one-liner, short, medium, long]
          Request: [optional details regarding the created challenge]
          '''
        Your response should strictly follow the following structure:
          '''
          {
          ID: "custom identifying information to prevent duplicates"
          challenge: "details/instructions of the challenge to be presented to the user"
          textHints: ["Provide several hints to help the user figure out the solution. These hints should not provide any code specific snippets or references to command names or methods"]
          codeHints: ["Provide several hints that are code specific and help the user determine the exact code they should be using to solve this problem"]
          testCases: ["Provided several test cases, including edge cases"]
          Solution: "Provide the code for the optimal solution to your challenge."
          }
          '''
      ` 
    },
    {"role": "user", "content": `{
      ID: ["js_beg_short_count_vowels", "js_beg_short_reverse_vowels", "js_beg_short_replace_vowels"],
      Language: Python,
      Difficulty: expert,
      Length: long
    }`}
  ],
    model: "gpt-3.5-turbo-1106",
    response_format: { "type": "json_object" }
  });

  console.log(JSON.parse(completion.choices[0].message.content));
}

module.exports = {
  main,
};