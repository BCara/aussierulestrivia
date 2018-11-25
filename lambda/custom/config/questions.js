'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_GB: [
        {
            index: 1,
            question: 'What date was the first game of the 2018 AFL season?',
            answers: ['Twentieth of March', 'Twentysecond of March', 'eighteenth of March', 'seventeenth of March'],
            correct_answer: 'Twentysecond of March'
        },
        {
            index: 2,
            question: 'Which team lost in the grandfinal?',
            answers: ['Collingwood', 'West Coast', 'Adelaide', 'Hawthorn'],
            correct_answer: 'Collingwood'
        },
        {
            index: 3,
            question: 'There was one drawn game during the ladder but which teams was it between?',
            answers: ['Geelong versus Adelaide', 'Essendon versus Hawthorn', 'Brisbane versus Gold Coast', 'Greater Western Sydney versus St Kilda'],
            correct_answer: 'Greater Western Sydney versus St Kilda'
        },
        {
            index: 4,
            question: 'Who won the best young player?',
            answers: ['Sam Powell Pepper', 'Hugh McCluggage', 'Tom Stewart', 'Luke Ryan'],
            correct_answer: 'Tom Stewart'
        },
        {
            index: 5,
            question: 'Which team had the highest average attendance, home and away?',
            answers: ['Adelaide', 'Richmond', 'Essendon', 'West Coast'],
            correct_answer: 'Richmond'
        },
        {
            index: 6,
            question: 'Which team had the lowest average attendance, home and away?',
            answers: ['North Melbourne', 'Gold Coast', 'St Kilda', 'Brisbane'],
            correct_answer: 'Gold Coast'
        },
        {
            index: 7,
            question: 'How many games did Collingwood play?',
            answers: ['26', '24', '23', '22'],
            correct_answer: '26'
        },
        {
            index: 8,
            question: 'How many goals did Jack Riewoldt score during the season?',
            answers: ['45', '65', '55', '75'],
            correct_answer: '65'
        },
        {
            index: 9,
            question: 'How many wooden spoons have Carlton earned in total?',
            answers: ['5', '6', '7', '8'],
            correct_answer: '5'
        },
        {
            index: 10,
            question: 'Who was the shortest AFL player in 2018?',
            answers: ['Cory Gregson', 'Tyson Sengle', 'Caleb Daniel'],
            correct_answer: 'Caleb Daniel'
        },
        {
            index: 11,
            question: 'Who was the lightest AFL player by weight in 2018?',
            answers: ['Dylan Moore', 'Tom Bellchambers', 'Will Powell', 'Stefan Giro'],
            correct_answer: 'Dylan Moore'
        },
        {
            index: 12,
            question: 'Victoria provided the most player by state in 2018, but which state provided the second most?',
            answers: ['Queensland', 'Western Australia', 'New South Wales'],
            correct_answer: 'Western Australia'
        },
        {
            index: 13,
            question: 'How many 2018 AFL players played their first AFL game overseas?',
            answers: [ '2', '30', '0', '14'],
            correct_answer: '14'
        },
        {
            index: 14,
            question: 'How tall are Aaron Sandilands and Mason Cox?',
            answers: ['two hundred and nineteen centimetres', 'two hundred and thirty centimetres', 'two hundred eleven centimetres', 'one hundred and ninety nine centimetres'],
            correct_answer: 'two hundred and eleven centimetres'
        },
        {
            index: 15,
            question: 'Who won the most valuable player award?',
            answers: ['Tom Mitchell', 'Dustin Martin', 'Patrick Dangerfield', 'Jack Steven'],
            correct_answer: 'Tom Mitchell'
        },
        {
            index: 16,
            question: 'Which of these was not an AFL player in 2018?',
            answers: ['Matt Crouch', 'Liam Picken', 'James Parkinson', 'Aliir Aliir'],
            correct_answer: 'James Parkinson'
        },
        {
            index: 17,
            question: 'Who made the most tackles during the season?',
            answers: ['Luke Shuey', 'Mitch Duncan', 'Matt Crouch', 'Sam Powell-Pepper'],
            correct_answer: 'Sam Powell Pepper'
        },
        {
            index: 18,
            question: 'Which player had the most metres gained?',
            answers: ['Heath Shaw', 'Daniel Rich', 'Tom Barrass', 'Tom Jonas'],
            correct_answer: 'Heath Shaw'
        },
        {
            index: 19,
            question: 'Which player made the most kicks?',
            answers: ['Kade Simpson', 'Sam Docherty', 'Shane Savage', 'Zak Jones'],
            correct_answer: 'Kade Simpson'
        },
        {
            index: 20,
            question: 'When was the AFL inaugural season?',
            answers: ['Nineteen Nineteen', 'Nineteen three', 'Eighteen Fifty Two', 'Eighteen Ninety Seven'],
            correct_answer: 'Eighteen Ninety Seven'
        },
        {
            index: 21,
            question: 'If the 2018 grand final had ended in a draw, how would the winner have been decided?',
            answers: ['Replay', 'Penalty Shootout', 'Extra time', 'Shared Trophy'],
            correct_answer: 'Extra time'
        },
        {
            index: 22,
            question: 'Which company was AFL 2018s premier partner?',
            answers: ['McDonalds', 'Toyota', 'Fox', 'National Australia Bank'],
            correct_answer: 'Toyota'
        },
        {
            index: 23,
            question: 'How many women\'s AFL teams participated in the 2018 season?',
            answers: [ '12', '8', '18'],
            correct_answer: '8'
        },
        {
            index: 24,
            question: 'Jack Gunston won the longest kick, but how far was it?',
            answers: ['66.9 metres', '55.7 metres', '75 metres', '80.2 metres'],
            correct_answer: '66.9 metres'
        },
        {
            index: 25,
            question: 'Was the attendance at the grand final higher, lower of the same as last year?',
            answers: ['One person higher', 'One Person Lower', 'The same'],
            correct_answer: 'One person higher'
        },
        {
            index: 26,
            question: 'Who was the AFL CEO in 2018?',
            answers: ['Richard Goyder', 'Gillon McLachlan', 'Mike Fitzpatrick', 'Guy Williams'],
            correct_answer: 'Gillon McLachlan'
        }

    ],
    questions_en_US: [
        {
            index: 1,
            question: 'What date was the first game of the 2018 AFL season?',
            answers: ['Twentieth of March', 'Twentysecond of March', 'eighteenth of March', 'seventeenth of March'],
            correct_answer: 'Twentysecond of March'
        },
        {
            index: 2,
            question: 'Which team lost in the grandfinal?',
            answers: ['Collingwood', 'West Coast', 'Adelaide', 'Hawthorn'],
            correct_answer: 'Collingwood'
        },
        {
            index: 3,
            question: 'There was one drawn game during the ladder but which teams was it between?',
            answers: ['Geelong versus Adelaide', 'Essendon versus Hawthorn', 'Brisbane versus Gold Coast', 'Greater Western Sydney versus St Kilda'],
            correct_answer: 'Greater Western Sydney versus St Kilda'
        },
        {
            index: 4,
            question: 'Who won the best young player?',
            answers: ['Sam Powell Pepper', 'Hugh McCluggage', 'Tom Stewart', 'Luke Ryan'],
            correct_answer: 'Tom Stewart'
        },
        {
            index: 5,
            question: 'Which team had the highest average attendance, home and away?',
            answers: ['Adelaide', 'Richmond', 'Essendon', 'West Coast'],
            correct_answer: 'Richmond'
        },
        {
            index: 6,
            question: 'Which team had the lowest average attendance, home and away?',
            answers: ['North Melbourne', 'Gold Coast', 'St Kilda', 'Brisbane'],
            correct_answer: 'Gold Coast'
        },
        {
            index: 7,
            question: 'How many games did Collingwood play?',
            answers: ['26', '24', '23', '22'],
            correct_answer: '26'
        },
        {
            index: 8,
            question: 'How many goals did Jack Riewoldt score during the season?',
            answers: ['45', '65', '55', '75'],
            correct_answer: '65'
        },
        {
            index: 9,
            question: 'How many wooden spoons have Carlton earned in total?',
            answers: ['5', '6', '7', '8'],
            correct_answer: '5'
        },
        {
            index: 10,
            question: 'Who was the shortest AFL player in 2018?',
            answers: ['Cory Gregson', 'Tyson Sengle', 'Caleb Daniel'],
            correct_answer: 'Caleb Daniel'
        },
        {
            index: 11,
            question: 'Who was the lightest AFL player by weight in 2018?',
            answers: ['Dylan Moore', 'Tom Bellchambers', 'Will Powell', 'Stefan Giro'],
            correct_answer: 'Dylan Moore'
        },
        {
            index: 12,
            question: 'Victoria provided the most player by state in 2018, but which state provided the second most?',
            answers: ['Queensland', 'Western Australia', 'New South Wales'],
            correct_answer: 'Western Australia'
        },
        {
            index: 13,
            question: 'How many 2018 AFL players played their first AFL game overseas?',
            answers: [ '2', '30', '0', '14'],
            correct_answer: '14'
        },
        {
            index: 14,
            question: 'How tall are Aaron Sandilands and Mason Cox?',
            answers: ['two hundred and nineteen centimetres', 'two hundred and thirty centimetres', 'two hundred eleven centimetres', 'one hundred and ninety nine centimetres'],
            correct_answer: 'two hundred and eleven centimetres'
        },
        {
            index: 15,
            question: 'Who won the most valuable player award?',
            answers: ['Tom Mitchell', 'Dustin Martin', 'Patrick Dangerfield', 'Jack Steven'],
            correct_answer: 'Tom Mitchell'
        },
        {
            index: 16,
            question: 'Which of these was not an AFL player in 2018?',
            answers: ['Matt Crouch', 'Liam Picken', 'James Parkinson', 'Aliir Aliir'],
            correct_answer: 'James Parkinson'
        },
        {
            index: 17,
            question: 'Who made the most tackles during the season?',
            answers: ['Luke Shuey', 'Mitch Duncan', 'Matt Crouch', 'Sam Powell-Pepper'],
            correct_answer: 'Sam Powell Pepper'
        },
        {
            index: 18,
            question: 'Which player had the most metres gained?',
            answers: ['Heath Shaw', 'Daniel Rich', 'Tom Barrass', 'Tom Jonas'],
            correct_answer: 'Heath Shaw'
        },
        {
            index: 19,
            question: 'Which player made the most kicks?',
            answers: ['Kade Simpson', 'Sam Docherty', 'Shane Savage', 'Zak Jones'],
            correct_answer: 'Kade Simpson'
        },
        {
            index: 20,
            question: 'When was the AFL inaugural season?',
            answers: ['Nineteen Nineteen', 'Nineteen three', 'Eighteen Fifty Two', 'Eighteen Ninety Seven'],
            correct_answer: 'Eighteen Ninety Seven'
        },
        {
            index: 21,
            question: 'If the 2018 grand final had ended in a draw, how would the winner have been decided?',
            answers: ['Replay', 'Penalty Shootout', 'Extra time', 'Shared Trophy'],
            correct_answer: 'Extra time'
        },
        {
            index: 22,
            question: 'Which company was AFL 2018s premier partner?',
            answers: ['McDonalds', 'Toyota', 'Fox', 'National Australia Bank'],
            correct_answer: 'Toyota'
        },
        {
            index: 23,
            question: 'How many women\'s AFL teams participated in the 2018 season?',
            answers: [ '12', '8', '18'],
            correct_answer: '8'
        },
        {
            index: 24,
            question: 'Jack Gunston won the longest kick, but how far was it?',
            answers: ['66.9 metres', '55.7 metres', '75 metres', '80.2 metres'],
            correct_answer: '66.9 metres'
        },
        {
            index: 25,
            question: 'Was the attendance at the grand final higher, lower of the same as last year?',
            answers: ['One person higher', 'One Person Lower', 'The same'],
            correct_answer: 'One person higher'
        },
        {
            index: 26,
            question: 'Who was the AFL CEO in 2018?',
            answers: ['Richard Goyder', 'Gillon McLachlan', 'Mike Fitzpatrick', 'Guy Williams'],
            correct_answer: 'Gillon McLachlan'
        }

    ]
});

