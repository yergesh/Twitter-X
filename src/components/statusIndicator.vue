<script setup lang="ts">
import { Attempt } from '@/types/Attempt';

const props = defineProps<{
  status: string | undefined,
  attemptId: number | undefined
}>()
console.log("indicator: ",props.attemptId);
var result="success";
var color="success";
if(props.status=="0"){
    result = "Inprocess";
    color="orange";
}else if(props.status=="1"){
    result="Success";
}else{
    result="Failed";
    color="red";
}

</script>

<template>
<v-btn :color="color" :to="{name:'attemptCode',params:{id:props.attemptId as number}}" >{{result}}</v-btn>

</template>