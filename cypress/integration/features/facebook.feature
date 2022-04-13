Feature: Facebook

@run
Scenario: Test Case 2.1 - Musala Soft profile picture appears on the new page
	When log into facebook
	And visit 'https://www.facebook.com/MusalaSoft?fref=ts'
	And click on Allow Essential and Optional Cookies
	Then Musala Soft profile picture appears on the new page 
	
