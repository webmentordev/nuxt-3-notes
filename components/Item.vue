<template>
    <div v-if="toggle">
        <div v-for="item in note.expand.history_via_note.slice().reverse()">
            <div class="bg-black py-2 px-4 text-white rounded-md mb-3">
                <p class="mb-1">{{ item.text }}</p>
                <p class="text-indigo-500">{{ item.created }}</p>
            </div>
        </div>
    </div>
    <button @click="toggle = !toggle" class="underline py-1 px-2 rounded-lg bg-gray-200">{{ toggle ? "hide history..." : "view history..." }}</button>
</template>

<script setup>
    const toggle = ref(false);
    defineProps(['note']);
</script>