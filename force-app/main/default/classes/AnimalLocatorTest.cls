@isTest
public class AnimalLocatorTest {
    @isTest static void testGetCallout(){
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        String response = AnimalLocator.getAnimalNameById(1);
        String expectedResult = 'chicken';
        System.assertEquals(response, expectedResult);
    }
}