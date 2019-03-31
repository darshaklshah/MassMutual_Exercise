# Mass Mutual Exercise
MassMutual Exercise using CucumberRunner

Prerequisite: This project requires apache maven (version 3 and above) to be installed on the system.

To run the test go to the root of the project and run the following command:
   mvn clean test -Dtest=com.massmutual.problem1.CucumberRunner
   
The output of the test is created inside target\Test-report directory
And cucumber-html report is created inside target\cucumber-html-report directory

The feature file is available in the following location: src\test\resources