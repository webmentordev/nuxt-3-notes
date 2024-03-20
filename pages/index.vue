<template>
    <section class="max-w-2xl w-full m-auto py-12 px-4">
        <h1 class="text-4xl mb-6">Welcome to Nuxt 3 Notes</h1>
        
        <Success v-if="success" :text="success" />

        <form @submit.prevent="addNote">
            <Textarea type="text" class="mb-2" v-model="text" placeholder="Write note..."></Textarea>
            <Button text="Add" />
        </form>

        <div class="py-12">
            <div v-if="notes.length">
                <div v-for="note in notes" :key="note">
                    <div class="p-3 rounded-md bg-gray-100 border border-gray-200 mb-5 relative">
                        <p class="mb-2 w-full">{{ note.note }}</p>
                        <button @click="removeNote(note.id)" class="absolute -right-2 -top-3">
                            <Icon class="text-red-600 text-lg" name="material-symbols:delete-rounded" />
                        </button>
                        <div class="flex">
                            <strong>Posted: </strong>
                            <p class="text-indigo-600 ml-2">{{ note.created }}</p>
                            <NuxtLink class="ml-2 text-start bg-indigo-600 text-white rounded-md px-2" :to='`/update/${note.id}`'>Update</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <p v-else class="text-center px-2 py-4 rounded-lg bg-gray-100 border border-gray-200">Notes does not exist! 😐</p>
        </div>
    </section>
</template>

<script setup>
    import PocketBase from 'pocketbase';

    const text = ref("");
    const notes = ref([]);
    const success = ref("");
    const api = useRuntimeConfig().public.api;
    const pb = new PocketBase(api);

    const results = await pb.collection('notes').getFullList({
        sort: '-created'
    });
    notes.value = results;

    async function addNote(){
        success.value = "";
        const result = await pb.collection('notes').create({
            note: text.value
        });
        notes.value.unshift(result);
        text.value = "";
        success.value = "Note has been added!";
    }

    async function removeNote(id){
        success.value = "";
        await pb.collection('notes').delete(id);
        notes.value = notes.value.filter((note) => {
            return note.id != id;
        });
        success.value = "Note has been removed!";
    }
</script>