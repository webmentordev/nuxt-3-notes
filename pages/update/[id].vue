<template>
    <section class="max-w-2xl w-full m-auto py-12 px-4">
        <h1 class="text-4xl mb-6">Update Note</h1>
        
        <Success v-if="success" :text="success" />

        <form @submit.prevent="updateNote">
            <Textarea type="text" class="mb-2" v-model="text" placeholder="Write note..."></Textarea>
            <Button text="Update" />
        </form>
    </section>
</template>

<script setup>
    import PocketBase from 'pocketbase';

    const text = ref("");
    const success = ref("");
    const api = useRuntimeConfig().public.api;
    const pb = new PocketBase(api);
    const id = useRoute().params.id;

    const result = await pb.collection('notes').getOne(id);
    text.value = result.note;

    async function updateNote(){
        success.value = "";
        if(text.value == result.note){
            success.value = "Note is same. So not updated!";
            return;
        }
        await pb.collection('history').create({
            text: result.note,
            note: result.id
        });
        await pb.collection('notes').update(id, {
            note: text.value
        });
        success.value = "Note has been updated";
    }
</script>