const OpenAI = require("openai");

async function challenges(req, res) {
  const openai = new OpenAI();

  try {
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
          - Pay close attention to the 'difficulty' and tailor your challenge to match the requested skill level
          - If request details are provided, do your best to create a challenge adhering to this request
          - Provide several test cases with the challenge. Doubly ensure the accuracy of expected outputs.
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
            testCases: ["input: test case input, output: "test case expected output"]
            Solution: "Provide the code for the optimal solution to your challenge."
            }
            '''
          ${req.body}
        ` 
      }
    ],
      model: "gpt-3.5-turbo-1106",
      response_format: { "type": "json_object" }
    });

    console.log(JSON.parse(completion.choices[0].message.content));

    res.status(200).json({ response: completion.choices[0].message.content });
    

    // res.status(200).json({ response: {
    //   ID: 'py_beg_short_find_max_number',
    //   challenge: 'Write a function that takes a list of numbers and returns the maximum number in the list.',
    //   textHints: [
    //     'Consider looping through the list and keeping track of the maximum value seen so far.',
    //     'You can initialize the maximum value as the first element in the list and then compare it with the rest of the elements in the list.'
    //   ],
    //   codeHints: [
    //     'You can use the built-in max() function to find the maximum number in a list.'
    //   ],
    //   testCases: [
    //     'Test the function with an empty list, a list with only one element, and a list with multiple elements to ensure the function works correctly in all cases.'
    //   ],
    //   Solution: 'def find_max_number(numbers):\n' +
    //     '    if not numbers:\n' +
    //     '        return None\n' +
    //     '    max_num = numbers[0]\n' +
    //     '    for num in numbers:\n' +
    //     '        if num > max_num:\n' +
    //     '            max_num = num\n' +
    //     '    return max_num'
    // }})
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

}

module.exports = {
  challenges,
};