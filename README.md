<h1>Loading</h1>
<p>Very simple and quick loading to your web project. Supported web mobile.</p>
<h2>Usage</h2>
<p>Add loading.js to your webpage. Attention: You also need jquery</p>
<h3>Show loading</h3>
<p>Default text message is "Loading..."</p>
    loading.initialize();
<p>You can also add your text. See the example below</p>
    loading.initialize("Test Loading...");
<h3>Close loading</h3>
    loading.close();
<h3>Checking loading</h3>
<p>It returns true if the loading is initialized and false if not</p>
    loading.exists();
