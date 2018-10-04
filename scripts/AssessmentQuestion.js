gRecordData = {
    Status: "NotStarted",
    AssessmentScore: 10,
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RecordTitle: "How Does Barbara Corcoran Pick Her Investments on Shark Tank?",
    LandingPageURL: "record2_landing.htm",
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionText: "What’s the best type of server to control user access to a network?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "E-mail server",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Authentication server ",
                                         "IsCorrect": true,
                                         "score": 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Application server",
                                         "IsCorrect": false
                                     }

                        ],
                        IsAnswered:false,
                         IncorrectFeedback: "​That’s not right. Authentication servers are used to track and control user access to networks.",
                         CorrectFeedback: "That’s right. Authentication servers are used to track and control user access to networks.",
                         "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "2",
                        QuestionText: "What’s the best type of server to use when employees need to share software programs (apps)?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Communication server",
                                         "IsCorrect": false,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "File server",
                                         "IsCorrect": false,
                                        

                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Application server",
                                         "IsCorrect": true,
                                         score: 2,

                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "That’s not right. An application server facilitates the sharing of application software among multiple users.​",
                        CorrectFeedback: "That’s right.​ An application server facilitates the sharing of application software among multiple users.",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "3",
                        QuestionText: "Which server would be included on a network to enable the hosting of a web site?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Application server",
                                         "IsCorrect": false
                                        
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "File server",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Web server",
                                         "IsCorrect": true,
                                         score: 2
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. A web server is used to host a website so that it will be available through the Internet.",
                        CorrectFeedback: "That’s right. A web server is used to host a website so that it will be available through the Internet.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "4",
                        QuestionText: "Which server is used to control all data transmitted between the internal network and external networks?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Communications server",
                                         "IsCorrect": true,
                                          score: 2
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Authentication server",
                                         "IsCorrect": false,
                                        
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Web server",
                                         "IsCorrect": false,
                                       
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. A communications server handles all communications between the network and other networks, including managing Internet connectivity.​​",
                        CorrectFeedback: "That’s right.​ A communications server handles all communications between the network and other networks, including managing Internet connectivity.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "5",
                        QuestionText: "If files need to be accessible to multiple employees, what type of server should a network include?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Application server",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "File server",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Database server",
                                         "IsCorrect": false,
                                       
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. A file server is a server that stores and manages files for network users.​​​",
                        CorrectFeedback: "That’s right.​ A file server is a server that stores and manages files for network users.​",
                        "UserSelectedOptionId": ""

                    }
                    

    ]
}