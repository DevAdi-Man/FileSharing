import {create} from 'zustand';
import {Buffer} from 'buffer';

interface ChunkState {
  chunkStore: {
    id: string | null;
    name: string;
    totalchunk: number;
    chunkArray: Buffer[];
  } | null;
  currentChunkSet: {
    id: string | null;
    totalChunk: number;
    chunkArray: Buffer[];
  } | null;
  setChunkStore: (chunkStore: any) => void;
  resetChunkStore: () => void;
  setCurrentChunkStore: (chunkChunkSet: any) => void;
  resetCurrentChunkSet: () => void;
}

export const useChunkStore = create<ChunkState>(set => ({
  chunkStore: null,
  currentChunkSet: null,
  setChunkStore: chunkStore => set(() => ({chunkStore})),
  resetChunkStore: () => set(() => ({chunkStore: null})),
  setCurrentChunkStore: currentChunkSet => set(() => ({currentChunkSet})),
  resetCurrentChunkSet: () => set(() => ({currentChunkSet: null})),
}));
