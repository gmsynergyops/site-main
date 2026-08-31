'use client';

import { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaSms,
  FaWhatsapp,
  FaLink
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

type SharePlatform = 'facebook' | 'twitter' | 'linkedin' | 'email' | 'sms' | 'whatsapp' | 'copy';

interface ShareButtonProps {
  shareText?: string;
  shareUrl?: string;
  className?: string;
  children: React.ReactNode;
}

const ShareButton = ({
  shareText,
  shareUrl = typeof window !== 'undefined' ? window.location.href : '',
  className = '',
  children
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('shareButton');
  const textContent = shareText || t('defaultShareText');

  const shareOnPlatform = (platform: SharePlatform) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(textContent);

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      toast.success(t('linkCopied'));
      setIsOpen(false);
      return;
    }

    const shareUrls: Record<Exclude<SharePlatform, 'copy'>, string> = {
      'facebook': `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'twitter': `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      'linkedin': `https://www.linkedin.com/shareArticle?url=${url}`,
      'email': `mailto:?subject=${text}&body=${text} - ${url}`,
      'sms': `sms:?&body=${text} - ${url}`,
      'whatsapp': `https://wa.me/?text=${text}%20${url}`
    };

    window.open(shareUrls[platform], '_blank');
    setIsOpen(false);
  };

  const platformIcons = [
    { platform: 'facebook', icon: <FaFacebookF className="text-blue-600" />, label: t('platforms.facebook') },
    { platform: 'twitter', icon: <FaXTwitter className="text-black" />, label: t('platforms.twitter') },
    { platform: 'linkedin', icon: <FaLinkedinIn className="text-blue-700" />, label: t('platforms.linkedin') },
    { platform: 'whatsapp', icon: <FaWhatsapp className="text-green-500" />, label: t('platforms.whatsapp') },
    { platform: 'email', icon: <FaEnvelope className="text-red-400" />, label: t('platforms.email') },
    { platform: 'sms', icon: <FaSms className="text-blue-400" />, label: t('platforms.sms') },
    { platform: 'copy', icon: <FaLink className="text-gray-600" />, label: t('platforms.copyLink') }
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-2 hover:bg-synergy-pink/10 text-synergy-pink hover:text-synergy-pink", className)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 p-2 grid grid-cols-2 gap-2"
      >
        {platformIcons.map(({ platform, icon, label }) => (
          <DropdownMenuItem
            key={platform}
            onClick={() => shareOnPlatform(platform as SharePlatform)}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100! hover:text-black! rounded-md"
          >
            {icon}
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
