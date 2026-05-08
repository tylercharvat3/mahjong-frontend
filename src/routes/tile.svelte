<script lang="ts">
	import Sprite from "./Sprite.svelte";
    import spriteData from "../data/sprites.json"
    import deck_mahjong_light_0 from "$lib/assets/deck_mahjong_light_0.png"

    export let tileValue: keyof typeof spriteData = "DR";
    $: coords = spriteData[tileValue];
</script>

<Sprite src={deck_mahjong_light_0} x={coords[0]} y={coords[1]}></Sprite>