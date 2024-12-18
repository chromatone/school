<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj.js';
import { DblClickDragZoom, defaults as defaultInteractions } from 'ol/interaction.js';

const props = defineProps({
  center: {
    type: Array,
    default: () => [0, 0],
  },
  zoom: {
    type: Number,
    default: 2,
  },
});

const mapContainer = ref(null);
let map;

onMounted(() => {
  if (mapContainer.value) {
    map = new Map({
      interactions: defaultInteractions().extend([new DblClickDragZoom()]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapContainer.value,
      view: new View({
        center: fromLonLat(props.center),
        zoom: props.zoom,
      }),
    });
  }
});

onUnmounted(() => {
  if (map) {
    map.dispose();
  }
});
</script>

<template lang="pug">
div(ref="mapContainer", style="width: 100%; height: 600px;")
</template>