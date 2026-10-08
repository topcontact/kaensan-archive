import React, { useCallback } from 'react';
import { Stack, TextInput, Select, Text, Box } from '@sanity/ui';
import { set, unset } from 'sanity';

const PRESETS = [
  'ARCHIVED',
  'ON VIEW',
  'PERMANENT ARCHIVE',
  'PERMANENT COLLECTION',
  'PRIVATE COLLECTION',
  'IN EXHIBITION',
];

export function StatusInput(props) {
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
      {/* 1. Dropdown for quick status presets */}
      <Select
        value={isPreset ? value : '__custom__'}
        onChange={handleSelect}
      >
        <option value="__custom__">
          {isPreset ? '▾ เลือกสถานะอื่นจากรายการ...' : '▾ [สถานะกำหนดเอง] หรือเลือกจากรายการ...'}
        </option>
        {PRESETS.map((preset) => (
          <option key={preset} value={preset}>
            {preset}
          </option>
        ))}
      </Select>

      {/* 2. Text input for free custom typing */}
      <Box>
        <TextInput
          {...elementProps}
          value={value}
          onChange={handleTextChange}
          placeholder="หรือพิมพ์ระบุสถานะเองที่นี่ (เช่น ON LOAN, RESTORATION ฯลฯ)"
        />
      </Box>

      <Text size={1} muted style={{ opacity: 0.75 }}>
        💡 สามารถเลือกจาก Dropdown ด้านบน หรือ พิมพ์ระบุสถานะใหม่เองในช่องนี้ได้ทันที
      </Text>
    </Stack>
  );
}
