import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path?: string; // Opsiyonel path
  description?: string; // Opsiyonel description
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, description, children }: ScreenContentProps) => {
  return (
    <View className="items-center flex-1 justify-center">
      <Text className="text-xl font-bold">{title}</Text>

      {path && (
        <View className="my-2">
          <Text className="text-lg">Path: {path}</Text>
        </View>
      )}

      {description && (
        <View className="my-2">
          <Text className="text-lg">{description}</Text>
        </View>
      )}

      {/* Eğer içerik varsa render edilsin */}
      {children}
    </View>
  );
};
