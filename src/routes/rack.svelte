<script>
	import Tile from "./tile.svelte";
</script>

<h1>This is my rack</h1>
<div>
    <ul>
        {#each {length: 13} as _,i}
            <Tile tileValue="1M"></Tile>
        {/each}
    </ul>
</div>