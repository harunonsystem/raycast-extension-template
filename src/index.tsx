import { Action, ActionPanel, List, showToast, Toast } from "@raycast/api";
import { useState } from "react";

interface Item {
  id: string;
  title: string;
  subtitle: string;
}

const SAMPLE_ITEMS: Item[] = [
  { id: "1", title: "Hello, World!", subtitle: "Welcome to your new Raycast extension" },
  { id: "2", title: "Getting Started", subtitle: "Edit src/index.tsx to customize this extension" },
  { id: "3", title: "Documentation", subtitle: "Visit developers.raycast.com for guides and API reference" },
];

export default function Command() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleAction(item: Item) {
    setIsLoading(true);
    try {
      await showToast({ style: Toast.Style.Success, title: "Selected", message: item.title });
    } catch (error) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: error instanceof Error ? error.message : "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <List isLoading={isLoading} searchBarPlaceholder="Search items...">
      {SAMPLE_ITEMS.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          actions={
            <ActionPanel>
              <Action title="Select Item" onAction={() => handleAction(item)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
