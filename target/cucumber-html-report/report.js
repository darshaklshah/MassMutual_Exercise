$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("problem1.feature");
formatter.feature({
  "line": 2,
  "name": "To test Problem1 page",
  "description": "",
  "id": "to-test-problem1-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@myTest"
    }
  ]
});
formatter.before({
  "duration": 3371783032,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Navigate to problem page and verify individual values",
  "description": "",
  "id": "to-test-problem1-page;navigate-to-problem-page-and-verify-individual-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I load Problem1 Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the Problem page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify the right number of values appear on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify values on the screen are greater than 0",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "total balance is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "values are formatted as currencies",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "total balance matches the sum of the values",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_load_problem1_page()"
});
formatter.result({
  "duration": 11462538863,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_enter_and()"
});
formatter.result({
  "duration": 28245726019,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"txt_ttl_val\"}\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DARSHAK-DELL\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\darsh\\AppData\\Local\\Temp\\scoped_dir22724_28465}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d73.0.3683.86, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 691f959cc8a47340768ea739c7a973de\n*** Element info: {Using\u003dname, value\u003dtxt_ttl_val}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:49)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.massmutual.problem1.stepDefinition.i_enter_and(stepDefinition.java:46)\r\n\tat ✽.When the Problem page is loaded(problem1.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.verify_the_right_number_of_values_appear_on_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.verify_values_on_the_screen_are_greater_than_0()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.total_balance_is_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.values_are_formatted_as_currencies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.total_balance_matches_the_sum_of_the_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 927855289,
  "status": "passed"
});
});