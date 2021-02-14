---
title: "Unit Testing with JUnit"
date: "2020-05-22"
featuredImage: "../../images/blog_images/junit.jpeg"
---

## Include JUnit package with Maven:
Add the following piece of code to Maven `pom.xml` file under the dependencies section:
```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>5.7.0-M1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.7.0-M1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-params</artifactId>
        <version>5.7.0-M1</version>
        <scope>test</scope>
    </dependency>   
</dependencies>
```

Also include the following piece of code to `pom.xml` file under the properties section (1.14 will be based on the JDK):
```xml
<properties>
    <maven.compiler.source>1.14</maven.compiler.source>
    <maven.compiler.target>1.14</maven.compiler.target>
</properties>
```

## Importing packages
The following package includes the annotations:
```
import org.junit.jupiter.api.Test;
```

The following package includes the assertions:
```
import static org.junit.jupiter.api.Assertions.*;
```

## Create a Test JUnit class
Create a basic Java file with .java extension. This file will be treated as normal class file.

## Write a test method
The test method should start with `@Test` annotation.

## Writing a Test Case
There are many scenarios for testing. One of these can be checking equality:
```java
@Test
void test(){
    int actualLength = "ABCDE".length();
    int expectedLength = 4;

    assertEquals(expectedLength, actualLength);
} 
```
Here, `asserEquals` is taking two parameters, one that is the expected value and the other one is the actual value that it is getting from a fuction/class.

## Assertion Methods:
* assertEquals(expected, actual)
* assertNotNull(value)
* assertNull(value)
* assertFalse(result)  //check if result is false
* assertTrue(result)   //check if result is true
* assertArrayEquals(expected, actual)       //for arrays

## Annotations
|Annotation|Description|
|---|---|
|@Test|Marks a test case method|
|@BeforeAll|Marks a method run once before running all test cases (static method)|
|@AfterAll|Marks a method run once after all the test cases are run (static method)|
|@BeforeEach|Marks a method run before each of test test cases (@Before in JUnit 4)|
|@AfterEach|Marks a method run after each of the test cases (@After in JUnit 4)|
|@DisplayName|Adds a name to the following test case|
|@ParameterizedTest|Marks a method to use multiple values|
|@ValueSource|Passes different values to a test case|
|@CsvSource|Passes sets of values to a test case|
|@RepeatedTest(number)|Repeats the following method `number` of times|
|@Disabled|Disable a test case (only in JUnit 5)|
|@Nested|Group multiple test cases in a test class (only in JUnit 5)|


## Setting up scenario
Sometimes before running a test, we need to create a scenario. We can do this by using an annotation '@BeforeEach' which would be run before all the test cases. We can use the '@AfterEach' annotation to cleanup after running a test case. Both of these functions can take `TestInfo` parameter that contains information about the test case running (only JUnit 5 feature).

We can also run a method before running any of the test cases by adding a '@BeforeAll' annotation. Similarly, we can run a method after running all the test cases by adding '@AfterAll' annotation. However, the methods for these annotations should be 'static'.

## Testing Exceptions
In JUnit, we can test whether a piece of code throws an Exception. In JUnit 4, we could pass `expect` in the annotation of the test that would throw. However, in JUnit 5, it is not available anymore. In JUnit we can use functional programming or lambda to test the exception.
```java
@Test
void contains_basic(){
    String str = "abcdefgh";
    boolean result = str.contains("ijk");
    assertEquals(false, result);
}
```

## Add a display name for a test case
We can give a name to a test case using the `@DisplayName("When string is null, throw")`. 

## Same test with different values
If we need to check the same test case with different data sets, we can use the `@ParameterizedTest` annotation. We can name this parameterized test by passing a `name` string to the annotation. After this annotation we need to insert another annotation that would pass store the values that we would test. Also, we need to pass a parameter to the method itself of the same type. Note that `junit-jupiter-params` dependency is required for `@ParameterizedTest` and `@ValueSource` annotations. Example:
```java
@ParameterizedTest(name = "{0} has a length more than 0")
@ValueSource(strings={"ABCD", "ABC", "A", "DEF"})
void stringGreaterThanZero(String string){
    assertTrue(string.length()>0);
}
```
## Passing sets of values to test case
If we need to pass sets of values to a method, we need to use `@CsvSource` annotation. This is similar to the `@ValueSource` annotation except, we can pass multiple values within a double-quote seperated by comma.
```java
@ParameterizedTest
@CsvSource(value = {"abcd, ABCD", "abc, ABC", "'', ''", "abcdefg, ABCDEFG"})
void upperCaseCSV(String lowercase, String uppercase){
    assertEquals(uppercase, lowercase.toUpperCase());
}
```

## Running same test multiple times
We can run a particular test case a certain number of times. We might want to do this to check the consistency of some random data. For this we need to include an annotation `@RepeatedTest(number)`, the `number` here indicates the number of times this test would be run. Note that this is availale only for JUnit 5.

## Testing for performance
We can also check whether some method is taking longer time to run. To do this, we can use the `assertTimeout` method, which usually takes two paramters, first one is a `Duration` object and the other one is a lambda or `Executable` object. Example:
```java
@Test
void performanceTest(){
    assertTimeout(Duration.ofSeconds(5),()->{
        for(int i = 0; i < 1000000; i++){
            int j = i;
            System.out.println(j);
        }
    });
}
```

## Grouping Tests
If we want to run multiple tests on a piece of data, we can use `@Nested` annotation along with a Inner Test Class.

```java
@Nested
class EmptyStringTest{

    @BeforeEach
    void setToEmpty(){
        str = "";
    }

    @Test
    void lengthIsZero(){
        assertEquals(0, str.length());
    }

    @Test
    void uppercaseIsEmpty(){
        assertEquals("", str.toUpperCase());
    }
}
```

## JUnit 5 vs JUnit 4
|JUnit 5|JUnit 4|
|:-:|:-:|
|@BeforeAll|@BeforeClass|
|@AfterAll|@AfterClass|
|@BeforeEach|@Before|
|@AfterEach|@After|
|@Disable|@Ignore|
|@Tag|@Category|
|@Nested|-|
|@Repeatedtested|-|
|assertThrows|Expected Attribute|
|assertTimeout|Timeout Attribute|

## References
* [xunitpatterns.com](http://xunitpatterns.com)
* [Intellij Error](https://dev.to/techgirl1908/intellij-error-java-release-version-5-not-supported-376)