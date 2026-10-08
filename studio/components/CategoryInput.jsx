import React, { useCallback } from 'react';
import { Stack, TextInput, Select, Text, Box } from '@sanity/ui';
import { set, unset } from 'sanity';

const PRESETS = [
  'INSTALLATION',
  'VIDEO & FILM',
  'MICROSCOPY & SCULPTURE',
  'ELECTRON MICROSCOPY',
  'MATERIAL SCULPTURE',
  'PRINT & SOUND',
  'PHOTOGRAPHY & FILM',
];

export function CategoryInput(props) {
  const { value = '', onChange, elementProps } = props;

  const handleSelect = useCallback(
    (event) => {
      const selected = event.currentTarget.value;
      if (selected && selected !== '__custom__') {
        onChange(set(selected));
      }
    },
    [onChange]
  );

  const handleTextChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  const isPreset = PRESETS.includes(value);

  return (
    <Stack space={2}>
      {/* 1. Dropdown for quick preset selection */}
      <Select
        value={isPreset ? value : '__custom__'}
        onChange={handleSelect}
      >
        <option value="__custom__">
          {isPreset ? '▾ เลือกหมวดหมู่อื่นจากรายการ...' : '▾ [หมวดหมู่กำหนดเอง] หรือเลือกจากรายการ...'}
        </option>
        {PRESETS.map((preset) => (
          <option key={preset} value={preset}>
            {preset}
          </option>
        ))}
      </Select>

      {/* 2. Text input to allow free typing */}
      <Box>
        <TextInput
          {...elementProps}
          value={value}
          onChange={handleTextChange}
          placeholder="หรือพิมพ์ระบุหมวดหมู่เองที่นี่ (เช่น PAINTING, PERFORMANCE ฯลฯ)"
        />
      </Box>

      <Text size={1} muted style={{ opacity: 0.75 }}>
        💡 สามารถเลือกจาก Dropdown ด้านบน หรือ พิมพ์ระบุหมวดหมู่ใหม่เองในช่องนี้ได้ทันที
      </Text>
    </Stack>
  );
}
