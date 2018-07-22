<template>
  <span><fa-icon :icon="icon" :style="iconStyle"/>{{ text }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'icon-text'
})
export default class IconText extends Vue {
 @Prop(String) text!: string;

 @Prop({
   type: [ String, Array ],
   required: true
 })
 icon!: string | string[];

 get iconStyle() {
   return {
     verticalAlign: ' -.125em',
     marginRight: '.5rem'
   };
 }
}
</script>
