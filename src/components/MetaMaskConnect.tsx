import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Wallet, AlertCircle, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface MetaMaskConnectProps {
  onConnect?: (account: string) => void;
  variant?: "default" | "hero" | "glass";
}

export const MetaMaskConnect: React.FC<MetaMaskConnectProps> = ({ 
  onConnect, 
  variant = "default" 
}) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          onConnect?.(accounts[0]);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask to connect your wallet",
        variant: "destructive",
      });
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        onConnect?.(accounts[0]);
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        });
      }
    } catch (error: any) {
      toast({
        title: "Connection Failed",
        description: error.message || "Failed to connect wallet",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  if (account) {
    return (
      <Button
        variant={variant}
        onClick={disconnectWallet}
        className="gap-2"
      >
        <CheckCircle className="w-4 h-4" />
        {account.slice(0, 6)}...{account.slice(-4)}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      onClick={connectWallet}
      disabled={isConnecting}
      className="gap-2"
    >
      {isConnecting ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </>
      )}
    </Button>
  );
};