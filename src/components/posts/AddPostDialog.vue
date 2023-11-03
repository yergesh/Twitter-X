<script setup lang="ts">
    import { addPostAsync } from '@/services/post-service';
import { Post } from '@/types/Post';
import { onMounted, ref, watch } from 'vue';
    const props = defineProps<{
        visible: Boolean | false,
        
    }>();
    const dialog = ref<Boolean>(props.visible);
    if(props.visible)dialog.value = true;
    watch(dialog, (val)=>{
        dialog.value = val;
    });  
    const post = ref<Post>({} as Post);
    post.value.htmlView = "ДАДАДАДАДАДАДАДАДАДДА";

    async function addPost(){
        await addPostAsync(post.value);
        dialog.value=false;
    }
</script>


<template>
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      :v-show="dialog"
    >
   
      <v-card>
        <v-card-title class="text-h5">
          Добавление посты
        </v-card-title>
        <v-card-text>Просто текст 2 ываыва ыва ыва ы аыв ыв<v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="addPost()"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>