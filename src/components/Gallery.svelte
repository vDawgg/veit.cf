<script>
    let glob = import.meta.glob("/public/pics/slideshow/*.jpg", { as: "raw" });
    export let index = 0;
    export let photos = [];

    for (const p in glob) {
        photos.push(p.toString());
    }
</script>

<div class="h-full w-full flex place-content-center">
    <button
        class=" my-auto ml-0 rounded-full p-1 bg-white text-black"
        on:click={() => (index = index == 0 ? photos.length - 1 : index - 1)}
    >
        <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
            /></svg
        >
    </button>
    <div class="h-full w-full justify-center">
        <img class="object-contain h-full w-full mx-auto" src={photos[index]} />
    </div>
    <button
        class="my-auto mr-0 rounded-full p-1 bg-white text-black"
        on:click={() => (index = index == photos.length - 1 ? 0 : index + 1)}
    >
        <!-- This does not seem to be an external svg. It still might make more sense to just go with utf-8 instead -->
        <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
            /></svg
        >
    </button>
</div>
