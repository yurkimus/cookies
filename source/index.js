export let getCookie = (name, source) => new RegExp('(^| )' + name + '=([^;]+)').exec(source)?.[2] ?? ''
