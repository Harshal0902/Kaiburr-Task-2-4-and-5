# Kaiburr Task 2, 4 and 5

## Task 2. Swagger codegen.

Create the same REST API as in task #1, but use https://editor.swagger.io/ to create your API definition and generate the server code. Choose any java-based server or server framework, that you like. You can either use the online editor or generate the code manually, e.g. using this document: https://github.com/swagger-api/swagger-codegen/wiki/server-stub-generator-howto. Make sure that you can deploy/run the generated code. Once your stub is ready - implement the same functionality as described in task #1, but now in java. Finally, be sure that you can show how your application responds to requests using postman, curl or any other HTTP client.

### Solution:

- Created a new project in swagger editor.
- Added the code in the editor(Code in task2 folder).
- Output:
![image](https://user-images.githubusercontent.com/64153988/235301151-8a4a8749-5a55-4337-b401-1b0bcc115e5f.png)

## Task 4. WEB UI Forms.

Create a basic WEB UI frontend for an application that you created for #1 or #2 using any UI framework of your choice. You should be able to create, show and delete records from your UI. 

Created Web UI for the application created in task 2 using ReactJS.

Output:
![image](https://user-images.githubusercontent.com/64153988/235301214-d1ce9e6b-31d5-487f-a6ca-c2a9806137d6.png)

## Task 5. CI-CD Pipeline
Create a CI-CD pipeline for a sample application (built in task 1 and/or 4 above) using any CI-CD tool of your choice like Jenkins, Azure DevOps, Gitlab, Github Actions, AWS CodePipeline or any other tool of your choice. Include a code build and a docker build step in
your pipeline.

### Solution:
The CI/CD pipeline is created using Github Actions. The workflow file is present in the .github/workflows folder. The workflow file is named as ci-cd.yml. The workflow file contains the following steps:
- Checkout: This step checks out the code from the repository.
- Build: This step builds the code using maven.
- Test: This step runs the unit tests.