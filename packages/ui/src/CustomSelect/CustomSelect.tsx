import { ViewStyle } from 'react-native';

import { Check, ChevronDown } from '@tamagui/lucide-icons';
import { Adapt, Select, SelectProps, Sheet } from 'tamagui';

interface ICustomSelect extends SelectProps {
  options: Array<{ label: string; value: string }>;
  triggerStyle?: ViewStyle;
  snapPoints?: number[];
}

export const CustomSelect = ({
  options,
  triggerStyle,
  snapPoints = [30],
  ...selectProps
}: ICustomSelect) => (
  <Select {...selectProps}>
    <Select.Trigger
      width={180}
      mt={16}
      borderWidth={0}
      ai="center"
      iconAfter={<ChevronDown size="$1" />}
      style={triggerStyle}
    >
      <Select.Value placeholder="Select..." />
    </Select.Trigger>

    <Adapt when="sm" platform="touch">
      <Sheet modal dismissOnSnapToBottom snapPoints={snapPoints}>
        <Sheet.Frame pt="$6" borderTopLeftRadius="$6" borderTopRightRadius="$6">
          <Adapt.Contents />
        </Sheet.Frame>
        <Sheet.Overlay bc="rgba(0,0,0,0.5)" />
        <Sheet.Handle bc="$secondary" top={20} height={4} opacity={1} w={32} als="center" />
      </Sheet>
    </Adapt>

    <Select.Content zIndex={200000}>
      <Select.Viewport minWidth={200}>
        <Select.Group space="$0">
          {options.map((item, i) => {
            return (
              <Select.Item index={i} key={item.label} value={item.value}>
                <Select.ItemText fow="700" color="$color" fos="$3">
                  {item.label}
                </Select.ItemText>
                <Select.ItemIndicator marginLeft="auto">
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Viewport>
    </Select.Content>
  </Select>
);

export default CustomSelect;
