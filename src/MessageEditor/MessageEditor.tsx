import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {LexicalEditor} from "lexical";
import EmojiPickerPlugin from './plugins/EmojiPickerPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import {EmojiNode} from "./nodes/EmojiNode.tsx";

export function MessageEditor() {
  const initialConfig: InitialConfigType = {
    onError(error: Error, editor: LexicalEditor): void {
      console.error('Error in editor', error, editor);
    },
    namespace: 'MyEditor',
    nodes: [EmojiNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable/>}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <EmojiPickerPlugin />
      <EmojisPlugin />
    </LexicalComposer>
  );
}