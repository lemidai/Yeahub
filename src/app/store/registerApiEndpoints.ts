import { registerSessionApi } from '@/entities/session';
import { registerQuestionsApi } from '@/entities/question';
import { registerSpecializationsApi } from '@/entities/specialization';
import { registerSkillsApi } from '@/entities/skill';
import '@features/login';
import '@/features/signUp';
import '@features/reset-password';

registerSessionApi();
registerQuestionsApi();
registerSpecializationsApi();
registerSkillsApi();
