enum Answer {
    A = "a",
    B = "b",
    C = "c",
    D = "d"
}

interface Options {
    "a" : string,
    "b" : string,
    "c" : string,
    "d" : string
}

export interface QuestionObj {
    ques : string,
    choices : Options,
    ans : Answer
}