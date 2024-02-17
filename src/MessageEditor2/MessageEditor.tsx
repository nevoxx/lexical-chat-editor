import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {LexicalEditor} from "lexical";
import EmojiPickerPlugin from './plugins/EmojiPickerPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import {EmojiNode} from "./nodes/EmojiNode.tsx";
import {
  TRANSFORMERS,
} from '@lexical/markdown';
import { LinkNode } from '@lexical/link';
import { ListNode, ListItemNode } from '@lexical/list';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';


import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import {CodeHighlightNode, CodeNode} from '@lexical/code';

export function MessageEditor() {
  const initialConfig: InitialConfigType = {
    onError(error: Error, editor: LexicalEditor): void {
      console.error('Error in editor', error, editor);
    },
    namespace: 'MyEditor',
    nodes: [
      HorizontalRuleNode,
      LinkNode,
      ListNode,
      ListItemNode,
      HeadingNode,
      QuoteNode,
      EmojiNode,
      CodeHighlightNode,
      CodeNode,
    ],
    theme: PlaygroundEditorTheme,
  };

  return (
    <div className="editor-container">
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <div className="editor-scroller">
            <div className="editor" >
              <ContentEditable />
            </div>
          </div>
        }
        placeholder={<></>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <CodeHighlightPlugin />
      <EmojiPickerPlugin />
      <EmojisPlugin />
    </LexicalComposer>
    </div>
  );
}