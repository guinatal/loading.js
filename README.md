<h1>Loading</h1>
Very simple and quick loading to your web project. Supported web mobile.

<h2>Usage</h2>
Add loading.js and jquery to your webpage.

<h3>Show loading</h3>
Default text message is "Loading..." but you can also add your text message.
    loading.initialize("My Text Loading...");
    
<h3>Close loading</h3>
Call the following function to close the loading.
    loading.close();
    
<h3>Checking loading</h3>
It returns true if the loading is initialized and false if not
    loading.exists();
