<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Student {
  name: string;
  startTime: Date;
  endTime: Date;
  preparationProgress: number;
  defenseProgress: number;
  isDefending: boolean; // Флаг для отображения защиты
  defenseCount: number; // Счетчик количества показов защиты
}

const students = ref<Student[]>([
  { name: "Нұржан Асқаров", startTime: new Date("2024-12-25T14:40:00"), endTime: new Date("2024-12-25T15:00:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Айбек Әлімжан", startTime: new Date("2024-12-25T14:45:00"), endTime: new Date("2024-12-25T15:05:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Аружан Бағдад", startTime: new Date("2024-12-25T14:50:00"), endTime: new Date("2024-12-25T15:10:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Әмірхан Барлыбаев", startTime: new Date("2024-12-25T14:55:00"), endTime: new Date("2024-12-25T15:15:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Аружан Берік", startTime: new Date("2024-12-25T15:00:00"), endTime: new Date("2024-12-25T15:20:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Ерболат Биекенов", startTime: new Date("2024-12-25T15:05:00"), endTime: new Date("2024-12-25T15:25:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Сая Булегенова", startTime: new Date("2024-12-25T15:10:00"), endTime: new Date("2024-12-25T15:30:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Диана Дайыржанова", startTime: new Date("2024-12-25T15:15:00"), endTime: new Date("2024-12-25T15:35:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Бекзат Дүйсенбекұлы", startTime: new Date("2024-12-25T15:20:00"), endTime: new Date("2024-12-25T15:40:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Нұрхан Елубаев", startTime: new Date("2024-12-25T15:25:00"), endTime: new Date("2024-12-25T15:45:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Ұлбала Жолдыбай", startTime: new Date("2024-12-25T15:30:00"), endTime: new Date("2024-12-25T15:50:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Амина Изтелеуова", startTime: new Date("2024-12-25T15:35:00"), endTime: new Date("2024-12-25T15:55:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Диас Иманбай", startTime: new Date("2024-12-25T15:40:00"), endTime: new Date("2024-12-25T16:00:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Айбек Қазанғап", startTime: new Date("2024-12-25T15:45:00"), endTime: new Date("2024-12-25T16:05:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Қанағат Қанат", startTime: new Date("2024-12-25T15:50:00"), endTime: new Date("2024-12-25T16:10:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Қуаныш Майдан", startTime: new Date("2024-12-25T15:55:00"), endTime: new Date("2024-12-25T16:15:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Дамир Мұқатай", startTime: new Date("2024-12-25T16:00:00"), endTime: new Date("2024-12-25T16:20:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Рахат Насыров", startTime: new Date("2024-12-25T16:05:00"), endTime: new Date("2024-12-25T16:25:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Бақнур Нуран", startTime: new Date("2024-12-25T16:10:00"), endTime: new Date("2024-12-25T16:30:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Нурлай Нурбердина", startTime: new Date("2024-12-25T16:15:00"), endTime: new Date("2024-12-25T16:35:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Бақнұр Орынбасар", startTime: new Date("2024-12-25T16:20:00"), endTime: new Date("2024-12-25T16:40:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Данияр Өтемісұлы", startTime: new Date("2024-12-25T16:25:00"), endTime: new Date("2024-12-25T16:45:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Елдос Рамат", startTime: new Date("2024-12-25T16:30:00"), endTime: new Date("2024-12-25T16:50:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Жангелді Рахымбек", startTime: new Date("2024-12-25T16:35:00"), endTime: new Date("2024-12-25T16:55:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Нұрсұлтан Сапа", startTime: new Date("2024-12-25T16:40:00"), endTime: new Date("2024-12-25T17:00:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Нұрсұлтан Сембек", startTime: new Date("2024-12-25T16:45:00"), endTime: new Date("2024-12-25T17:05:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Расул Сериккан", startTime: new Date("2024-12-25T16:50:00"), endTime: new Date("2024-12-25T17:10:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Еркебулан Султангазин", startTime: new Date("2024-12-25T16:55:00"), endTime: new Date("2024-12-25T17:15:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Ерасыл Тұрған", startTime: new Date("2024-12-25T17:00:00"), endTime: new Date("2024-12-25T17:20:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Нұрлан Шарыпқан", startTime: new Date("2024-12-25T17:05:00"), endTime: new Date("2024-12-25T17:25:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Сабина Абилда", startTime: new Date("2024-12-25T17:10:00"), endTime: new Date("2024-12-25T17:30:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
  { name: "Мирас Азаматұлы", startTime: new Date("2024-12-25T17:15:00"), endTime: new Date("2024-12-25T17:35:00"), preparationProgress: 0, defenseProgress: 0, isDefending: false, defenseCount: 0 },
]);

const completedStudents = ref<Student[]>([]); // Массив завершенных студентов

const currentDefendingStudent = ref<Student | null>(null);

// Обновление прогресса и переход к защите
function updateProgress() {
  setInterval(() => {
    const now = new Date();

    students.value = students.value.map((student) => {
      const updatedStudent = { ...student };
      const totalDuration = (student.endTime.getTime() - student.startTime.getTime()) / 1000; // В секундах
      const elapsed = (now.getTime() - student.startTime.getTime()) / 1000; // В секундах

      // Если время уже прошло
      if (elapsed >= totalDuration) {
        updatedStudent.preparationProgress = 100;
        updatedStudent.defenseProgress = 100;
        updatedStudent.isDefending = false;

        // Перемещаем студента в список завершенных
        completedStudents.value.push(updatedStudent);
        return null; // Удаляем студента из текущего списка
      }

      const preparationTime = totalDuration * 0.75; // 75% на подготовку
      const defenseTime = totalDuration * 0.25; // 25% на защиту

      if (elapsed <= preparationTime) {
        updatedStudent.preparationProgress = Math.min((elapsed / preparationTime) * 100, 100);
        updatedStudent.defenseProgress = 0;
        updatedStudent.isDefending = false;
      } else {
        const defenseElapsed = elapsed - preparationTime;
        updatedStudent.preparationProgress = 100;
        updatedStudent.defenseProgress = Math.min((defenseElapsed / defenseTime) * 100, 100);
        updatedStudent.isDefending = true;

        // Если студент только начал защиту и его имя еще не было показано 3 раза
        if (updatedStudent.isDefending && updatedStudent.defenseCount < 3) {
          updatedStudent.defenseCount += 1;
          currentDefendingStudent.value = updatedStudent;
          setTimeout(() => {
            currentDefendingStudent.value = null;
          }, 2000); // Ожидание 2 секунды и сброс
        }
      }

      return updatedStudent;
    }).filter(Boolean); // Убираем null-значения (студентов, которых мы удалили)

  }, 1000); // Обновляем прогресс каждую секунду
}

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5); // ЧЧ:ММ
}
onMounted(() => {
  updateProgress();
});

</script>

<template >
  <v-app style="z-index: 0;">
    <v-container>
    <h1>Студенттер тізімі</h1>
    <v-row>
      <v-col v-for="student in students" :key="student.name" cols="12" md="4">
        <v-card>
          <v-card-title>{{ student.name }}</v-card-title>
          <v-card-subtitle>
            Уақыты: {{ formatTime(student.startTime) }} - {{ formatTime(student.endTime) }}
          </v-card-subtitle>

          <v-card-text>
            <div class="progress">
              <p>Дайындалу: {{ student.preparationProgress.toFixed(1) }}%</p>
              <v-progress-linear
                :value="student.preparationProgress"
                height="20"
                color="blue"
                striped
              />
            </div>

            <div class="progress">
              <p>Қорғау: {{ student.defenseProgress.toFixed(1) }}%</p>
              <v-progress-linear
                :value="student.defenseProgress"
                height="20"
                color="green"
                striped
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h1>Емтиханды аяқтаған студенттер</h1>
    <v-row>
      <v-col v-for="student in completedStudents" :key="student.name" cols="12" md="4">
        <v-card>
          <v-card-title>{{ student.name }}</v-card-title>
          <v-card-subtitle>
            Завершено в: {{ formatTime(student.endTime) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

     <!-- Модальное окно с ФИО студента во время защиты -->
    <v-dialog v-model="currentDefendingStudent" max-width="600px" style="height: 500px;">
      <v-card style="height: 200px;">
        <v-card-title class="headline">Приглашаем студента!</v-card-title>
        <h1 style="text-align: center;">{{ currentDefendingStudent?.name }}</h1>
      </v-card>
    </v-dialog>
  </v-container>
</v-app> 
</template>

<style>
.progress {
  margin-bottom: 20px;
}
</style>