# resume-parser

## description
A parser that extracts resume - in pdf fornat only - into texts and then matches words given the search term

 
## test cases (for future development)
### to test how our algorithm works we/recruiter can rate the accuracy by judging what resumes it moves forward and what resumes it drops. Tweak the algorithm to improve the accuracy rate
#### note: the accuracy rate will be given by the recruiter as how accurately the algorithm sorted the resumes


``` Documents ```
### Functional Requirement
- allows only 1 file to be upload and it must be a PDF file 
- a search bar where the user can search for the words [the entire serach will be considered one word] they are looking for 
    - if there's no file or content in the file, the search result will be empty
    - if the search term is empty it will display the array of all the words 
