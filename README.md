<h1>Loading.js</h1>
<p>Very simple and quick loading to your web project. Supported web mobile.</p>

<h2>Usage</h2>
<p>Add "loading.js" and "loading.css" to your project. Add also the div below inside body tag.</p>
    <div id="loading_"></div>

<h3>Show loading</h3>
<p>You may just call the function below or also add your loading message as parameter.</p>
    loading.initialize();
<p></p>
    loading.initialize("Loading");
    
<h3>Close loading</h3>
<p>Call the following function to close the loading.</p>
    loading.close();
    
<h3>Check loading</h3>
<p>It returns true if the loading is initialized and false if not.</p>
    loading.exists();
