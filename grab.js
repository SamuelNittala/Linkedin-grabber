//adding listener to the button
document.getElementById("grab").addEventListener('click', () => {
    console.log("DOM LOADED!");
    function modifyDOM() {
        //evalaute xpath
        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        //linkedin-regex
        let link = document.URL;
        let regex= /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm
        //check whether the url is linkedin
        if (regex.test(link)) {
            //xpaths for username and company
            let username = "/html/body/div[6]/div[3]/div/div/div/div/div[2]/div/div/main/div/section[1]/div[2]/div[2]/div/div[1]/h1"
            let company = "/html/body/div[6]/div[3]/div/div/div/div/div[2]/div/div/main/div/section[1]/div[2]/div[2]/ul/li[1]/a/h2/div"
            //logging uname,cname to console
            console.log('USERNAME: ' + getElementByXpath(username).innerText);
            console.log('COMPANY: '+ getElementByXpath(company).innerText);
        }
        else console.log("NOT A LINKEDIN PROFILE");
        return document.body.innerHTML;
    }
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' 
    });
});
