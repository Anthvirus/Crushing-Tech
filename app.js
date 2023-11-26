const customizeStoreBox = document.getElementById('customizeBox');
const addPaymentBox = document.getElementById('paymentBox');
const addProductBox = document.getElementById('productBox');
const storeNameBox = document.getElementById('storeBox');
const addDomainBox = document.getElementById('domainBox');
const customizeStoreBoxClosed = document.getElementById('customizeBoxClosed');
const addPaymentBoxClosed = document.getElementById('paymentBoxClosed');
const addProductBoxClosed = document.getElementById('productBoxClosed');
const storeNameBoxClosed = document.getElementById('storeBoxClosed');
const addDomainBoxClosed = document.getElementById('domainBoxClosed');
const setupSteps = document.getElementById('setupSteps');
const selectPlan = document.getElementById('selectPlan');
const closeSelectPlan = document.getElementById('closeSelectPlan');
const toggleStepsOn = document.getElementById('toggleStepsOff');
const toggleStepsOff = document.getElementById('toggleStepsOn');
const toggleNotification = document.getElementById('notificationToggle');
const notificationBox = document.getElementById('notificationBox');
const myStore = document.getElementById('myStore');
const shopName = document.getElementById('shopName');
const shopLogo = document.getElementById('shopLogo');


let notificationOn = false;
let storeOpen = false;

selectPlan.addEventListener('click', () => {
    window.location.href = 'shopify.com/pricing';
})
function changeIcon(){
    defaultLoader.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
}
toggleNotification.addEventListener('click', () => {
    notificationOn = !notificationOn;
    if(notificationOn == true) {
        notificationBox.style.display = 'flex';
        toggleNotification.style.backgroundColor = '#656266';
    }else if(notificationOn == false) {
        notificationBox.style.display = 'none';
        toggleNotification.style.backgroundColor = '#322F33';
    }
})
toggleNotification.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        notificationOn = !notificationOn;
        if(notificationOn == true) {
            notificationBox.style.display = 'flex';
            toggleNotification.style.backgroundColor = '#656266';
        }else if(notificationOn == false) {
            notificationBox.style.display = 'none';
            toggleNotification.style.backgroundColor = '#322F33';
        }
    }
})
shopName.addEventListener('click', () => {
    storeOpen = !storeOpen;
    if(storeOpen == true) {
        myStore.style.display = 'flex';
        shopName.style.backgroundColor = '#656266';
    }else if(storeOpen == false) {
        myStore.style.display = 'none';
        shopName.style.backgroundColor = '#322F33';
    }
})
shopName.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        storeOpen = !storeOpen;
        if(storeOpen == true) {
            myStore.style.display = 'flex';
            shopName.style.backgroundColor = '#656266';
        }else if(storeOpen == false) {
            myStore.style.display = 'none';
            shopName.style.backgroundColor = '#322F33';
        }
    }
})
shopLogo.addEventListener('click', () => {
    storeOpen = !storeOpen;
    if(storeOpen == true) {
        myStore.style.display = 'flex';
        shopName.style.backgroundColor = '#656266'
    }else if(storeOpen == false) {
        myStore.style.display = 'none';
        shopName.style.backgroundColor = '#322F33';
    }
})
shopLogo.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        storeOpen = !storeOpen;
        if(storeOpen == true) {
            myStore.style.display = 'flex';
            shopName.style.backgroundColor = '#656266'
        }else if(storeOpen == false) {
            myStore.style.display = 'none';
            shopName.style.backgroundColor = '#1C181D'
        }
    }
})


closeSelectPlan.addEventListener('click', function(){
    selectPlan.style.display = 'none';
})
closeSelectPlan.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        selectPlan.style.display = 'none';
    }
})
customizeStoreBoxClosed.addEventListener('click', function(){
    addPaymentBox.style.display = 'none';
    addProductBox.style.display = 'none';
    storeNameBox.style.display = 'none';
    addDomainBox.style.display = 'none';
    customizeStoreBox.style.display = 'flex';
    addProductBoxClosed.style.display = 'flex';
    customizeStoreBoxClosed.style.display = 'none';
    addDomainBoxClosed.style.display = 'flex';
    addPaymentBoxClosed.style.display = 'flex';
    storeNameBoxClosed.style.display = 'flex';
})
customizeStoreBoxClosed.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addPaymentBox.style.display = 'none';
        addProductBox.style.display = 'none';
        storeNameBox.style.display = 'none';
        addDomainBox.style.display = 'none';
        customizeStoreBox.style.display = 'flex';
        addProductBoxClosed.style.display = 'flex';
        customizeStoreBoxClosed.style.display = 'none';
        addDomainBoxClosed.style.display = 'flex';
        addPaymentBoxClosed.style.display = 'flex';
        storeNameBoxClosed.style.display = 'flex';
    }
})
addProductBoxClosed.addEventListener('click', function(){
    addPaymentBox.style.display = 'none';
    addProductBox.style.display = 'flex';
    storeNameBox.style.display = 'none';
    addDomainBox.style.display = 'none';
    customizeStoreBox.style.display = 'none';
    addProductBoxClosed.style.display = 'none';
    addDomainBoxClosed.style.display = 'flex';
    addPaymentBoxClosed.style.display = 'flex';
    customizeStoreBoxClosed.style.display = 'flex';
    storeNameBoxClosed.style.display = 'flex';
})
addProductBoxClosed.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addPaymentBox.style.display = 'none';
        addProductBox.style.display = 'flex';
        storeNameBox.style.display = 'none';
        addDomainBox.style.display = 'none';
        customizeStoreBox.style.display = 'none';
        addProductBoxClosed.style.display = 'none';
        addDomainBoxClosed.style.display = 'flex';
        addPaymentBoxClosed.style.display = 'flex';
        customizeStoreBoxClosed.style.display = 'flex';
        storeNameBoxClosed.style.display = 'flex';
    }
})
addDomainBoxClosed.addEventListener('click', function(){
    addPaymentBox.style.display = 'none';
    addProductBox.style.display = 'none';
    storeNameBox.style.display = 'none';
    addDomainBox.style.display = 'flex';
    customizeStoreBox.style.display = 'none';
    addDomainBoxClosed.style.display = 'none';
    customizeStoreBoxClosed.style.display = 'flex';
    addProductBoxClosed.style.display = 'flex';
    addPaymentBoxClosed.style.display = 'flex';
    storeNameBoxClosed.style.display = 'flex';
})
addDomainBoxClosed.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addPaymentBox.style.display = 'none';
        addProductBox.style.display = 'none';
        storeNameBox.style.display = 'none';
        addDomainBox.style.display = 'flex';
        customizeStoreBox.style.display = 'none';
        addDomainBoxClosed.style.display = 'none';
        customizeStoreBoxClosed.style.display = 'flex';
        addProductBoxClosed.style.display = 'flex';
        addPaymentBoxClosed.style.display = 'flex';
        storeNameBoxClosed.style.display = 'flex';
    }
})
storeNameBoxClosed.addEventListener('click', function(){
    addPaymentBox.style.display = 'none';
    addProductBox.style.display = 'none';
    storeNameBox.style.display = 'flex';
    addDomainBox.style.display = 'none';
    customizeStoreBox.style.display = 'none';
    storeNameBoxClosed.style.display = 'none';
    customizeStoreBoxClosed.style.display = 'flex';
    addProductBoxClosed.style.display = 'flex';
    addDomainBoxClosed.style.display = 'flex';
    addPaymentBoxClosed.style.display = 'flex';
})
storeNameBoxClosed.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addPaymentBox.style.display = 'none';
        addProductBox.style.display = 'none';
        storeNameBox.style.display = 'flex';
        addDomainBox.style.display = 'none';
        customizeStoreBox.style.display = 'none';
        storeNameBoxClosed.style.display = 'none';
        customizeStoreBoxClosed.style.display = 'flex';
        addProductBoxClosed.style.display = 'flex';
        addDomainBoxClosed.style.display = 'flex';
        addPaymentBoxClosed.style.display = 'flex';
    }
})
addPaymentBoxClosed.addEventListener('click', function(){
    addPaymentBox.style.display = 'flex';
    addProductBox.style.display = 'none';
    storeNameBox.style.display = 'none';
    addDomainBox.style.display = 'none';
    customizeStoreBox.style.display = 'none';
    addPaymentBoxClosed.style.display = 'none';
    customizeStoreBoxClosed.style.display = 'flex';
    addProductBoxClosed.style.display = 'flex';
    addDomainBoxClosed.style.display = 'flex';
    storeNameBoxClosed.style.display = 'flex';
})
addPaymentBoxClosed.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addPaymentBox.style.display = 'flex';
        addProductBox.style.display = 'none';
        storeNameBox.style.display = 'none';
        addDomainBox.style.display = 'none';
        customizeStoreBox.style.display = 'none';
        addPaymentBoxClosed.style.display = 'none';
        customizeStoreBoxClosed.style.display = 'flex';
        addProductBoxClosed.style.display = 'flex';
        addDomainBoxClosed.style.display = 'flex';
        storeNameBoxClosed.style.display = 'flex';
    }
})