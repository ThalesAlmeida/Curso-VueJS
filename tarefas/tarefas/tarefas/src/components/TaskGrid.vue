<template>
  <div class="task-grid">
      <template v-if="tasks.length">
          <Task v-for="(task, i) in tasks" :key="task.name"
                @taskDeleted="$emit('taskDeleted', i)"
                @taskStateChanged="$emit('taskStateChanged', i)"
              :task="task">
          </Task>
      </template>
      <p class="no-task" v-else>Tudo certo</p>
  </div>
</template>

<script>
import Task from './Task'
export default {
    components: {Task},
    props: {
        tasks: {type: Array, required: true}
    }
}
</script>

<style>
    .task-grip {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    }

    .task-grip .task {
        margin: 10px;
    }

    .no-task {
        color:  #AAA;
        font-size: 1.7rem;
    }


</style>