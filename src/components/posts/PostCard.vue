<script setup lang="ts">
import { Post } from "@/types/Post";
import { ref, computed } from "vue"
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import  dayjs from 'dayjs'
import 'dayjs/locale/ru'
const props = defineProps<{
  post: Post;
}>();

const bodyLines = computed(() => props.post.htmlView.split("\n"))

dayjs.locale('ru')
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

function myFormat(d:Date|undefined):string {
    console.log("d1: ",d);
    var sec = dayjs().diff(d,"second");
    console.log(sec-21600);
    //d?.setUTCHours(6);
    return dayjs(d).tz('Pacific/Fiji').format("YYYY-MM-DD");
    //return dayjs().to(dayjs(d));
}
</script>
<template>
    <v-card
    class="mx-auto"
  >
    <template v-slot:title>
      <p class="mt-8 mb-4 text-justify">{{ post.username }} {{myFormat(post.publicationDate) }}</p>
    </template>

    <v-card-text>
        <p class="text-justify mb-4" v-for="line in bodyLines">{{ line }}</p>
    </v-card-text>
    <v-card-actions>
            <v-col cols="auto">
                <v-btn density="compact" icon="mdi-heart"></v-btn>
                <p>{{ post.likeCount }} likes</p>
            </v-col>
            <v-col cols="auto">
                <v-btn density="compact" icon="mdi-message"></v-btn>
                <p>{{ post.commentCount }} comment</p>
            </v-col>
            <v-col cols="auto">
                <v-btn density="compact" icon="mdi-share"></v-btn>
                <p>{{ post.replyCount }} repost</p>
            </v-col>
          </v-card-actions>
  </v-card>
</template>

<style>
textarea.cts_textarea {
  border-bottom: 1px solid rgb(var(--v-theme-on-surface-variant));;
  outline: none;
  padding: 6px 6px;
  /* background: rgb(var(--v-theme-on-surface-variant)); */
  background-color: rgb(var(--v-theme-on-surface-variant));
  color: inherit;
  width: 100%;
  border-radius: 4px 4px 0 0;
}
</style>
