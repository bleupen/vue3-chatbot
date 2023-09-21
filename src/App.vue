<script setup lang="ts">
import '@entrinsik/informer-vue3/style.css';
import { Informer, AiChat } from '@entrinsik/informer-vue3';

const prompts = ['How many Datasets do I have?', 'What are my Datasets?'];
</script>

<template>
  <Informer class="flex-column" :apiOpts="{ headers: { 'x-trace-id': 'vue' } }">
    <div class="app-wrapper">
      <div class="app-content">
        <div :style="{ opacity: 0.5, fontSize: '20px' }">My Application</div>
      </div>
      <AiChat
          class="ai-chat-container"
          :modules="['dataset', 'module']"
          :prompts="prompts"
          :header-title="'AI Assistant'"
          :header-icon="aiLogo"
      />
    </div>
  </Informer>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  flex: 1;
  max-height: 100%;
}

.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;
  box-sizing: border-box;
}

.ai-chat-container {
  width: 480px;
  border-left: 1px solid #d2d2d2;
  padding: 3px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
  flex: 1;
}
</style>
