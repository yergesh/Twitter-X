<script setup lang="ts">

import { Post } from '@/types/Post';
import { ref } from 'vue';
import 'dayjs/locale/ru'
import PostCard from "@/components/posts/PostCard.vue"

const posts = ref<Array<Post>>([
	new Post(1, new Date(), "This is the first post.", "User1",10,2,3),
  new Post(2, new Date(), "This is the second post.", "User2",100,20,2),
  new Post(3, new Date(), "This is the third post.", "User3",42,3,0),
]);  
const isOpen=ref<Boolean>(false);
	function change(){
  isOpen.value = !isOpen.value;
}
const post = ref<Post>({} as Post);
async function addPost(newPost){
    posts.value.push(newPost);
    isOpen.value=false;
}
</script>


<template>
	<v-table>
		<thead>
			<tr>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn height="40" variant="contained" color="black" @click="change()">Добавить пост</v-btn>
				</v-card-actions>
			</tr>
		</thead>
		<tbody>
			<tr v-for="post in posts" :key="post.id">
				<post-card :post="post"></post-card>
				<v-spacer />
			</tr>
		</tbody>
	</v-table>
	<div>
		<!-- <add-post-dialog :visible="isOpen" ></add-post-dialog> -->
    <v-row style="margin-left:30% !important; ">
      <v-dialog
        v-model="isOpen"
        persistent
        max-width="290"
        
      >
    
        <v-card>
          <v-card-title class="text-h5">
            Добавить пост
          </v-card-title>
          <v-card-text>
            <v-textarea
              filled
              label="Текст"
              placeholder="Вводите текст"
              v-model="post.htmlView"
            ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="isOpen = false"
            >
              Закрыть
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="addPost(post)"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>