import HelloWorld from './HelloWorld.svelte';

new HelloWorld({
	target: document.querySelector('#hello-world')
});

export default HelloWorld;