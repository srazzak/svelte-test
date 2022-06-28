import App from './App.svelte';
import HelloWorld from './HelloWorld.svelte';

new HelloWorld({
	target: document.querySelector('#test')
});

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;