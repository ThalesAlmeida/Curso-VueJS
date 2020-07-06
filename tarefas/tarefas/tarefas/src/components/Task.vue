<template>
  <div
  @click="$emit('taskStateChanged', task)" 
  class="task"
  :class="stateClass">
  <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
      <p>{{task.name}}</p>
  </div>
</template>

<script>
export default {
    props: {
        task:{type: Object, required:true}
    },

    computed: {
        stateClass(){
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
    position: relative;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-content: center;

}

.pending {
    border-left: 12px solid red;
    background-color: red;
}

.done {
    color: #DDD;
    border-left: 12px green;
    background-color: green;
    text-decoration: line-through;
}

.pending .close {
    background-color: red;
}

.done .close {
    background-color: green;
}

.close {
    position: absolute;
    right: 10px;
    top: 10px;
}

</style>