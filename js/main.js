const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
        throw new Error('No Push API Support!')
    }
};

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('js/service.js');
    return swRegistration;
};

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }
};

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body,
        // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
};

const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission =  await requestNotificationPermission();
    let i = 1;
    
    setInterval(() => {
        showLocalNotification(`Title ${i}`, `Message ${i}`, swRegistration);
        i++
	}, 2000);
};

main();
