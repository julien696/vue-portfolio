<script setup>
    import { defineProps, defineEmits, ref } from 'vue';
    
    const props = defineProps({
        isOpen: Boolean,
    });

    const emit = defineEmits(["modal-close"]);

    const target = ref(null)
</script>