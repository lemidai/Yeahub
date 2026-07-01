import { Question } from '@/entities/question/model/types';

export type ShortAnswerModalType = 'shortAnswer';
export type ShortAnwerModalOpenProps = { type: ShortAnswerModalType; props?: { data: Question } };
