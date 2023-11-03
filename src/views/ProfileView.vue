<script setup lang="ts">

import { ref } from 'vue';
import 'dayjs/locale/ru'
import { User } from '@/types/User';

const user = ref<User>({id: 1, FirstName: "Almat", LastName: "Yergesh", Birthday: new Date(), Email:"yergesh.a.k@fmail.com", Bio:"Software Engineer"} as User);  

const isOpen=ref<Boolean>(false);
	function change(){
  isOpen.value = !isOpen.value;
}

</script>

<template>
    <v-card-actions>
					<v-spacer></v-spacer>
					<v-btn height="40" variant="contained" color="black" @click="change()">Change Profile</v-btn>
				</v-card-actions>
    <v-container>
            <v-card>
                <v-card-text>
                    <v-text-field
                        v-model="user.FirstName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="user.LastName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="user.Email"
                        label="Email Address"></v-text-field>
                    <v-text-field
                        v-model="user.Birthday"
                        label="Birthday"></v-text-field>
                    <v-text-field
                        v-model="user.Bio"
                        label="Bio"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    
                </v-card-actions>
            </v-card>
    </v-container>
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
            Change Profile
          </v-card-title>
          <v-card-text>
            <v-text-field
              filled
              label="FirstName"
              v-model="user.FirstName"
            ></v-text-field>
            <v-text-field
              filled
              label="LastName"
              v-model="user.LastName"
            ></v-text-field>
            <v-text-field
              filled
              label="Email"
              v-model="user.Email"
            ></v-text-field>
            <v-text-field
              filled
              label="Bio"
              v-model="user.Bio"
            ></v-text-field>
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
              @click="isOpen = false"
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