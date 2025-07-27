import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { migrateBlogPosts, checkExistingPosts } from '@/utils/migrateData'
import { useToast } from '@/hooks/use-toast'

const Migration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [migrationStatus, setMigrationStatus] = useState<string>('')
  const { toast } = useToast()

  const handleMigration = async () => {
    setIsLoading(true)
    setMigrationStatus('데이터 마이그레이션을 시작합니다...')

    try {
      // Check if posts already exist
      const existingPosts = await checkExistingPosts()
      
      if (existingPosts.length > 0) {
        setMigrationStatus(`이미 ${existingPosts.length}개의 포스트가 존재합니다.`)
        toast({
          title: "마이그레이션 취소",
          description: "이미 데이터가 존재합니다. 기존 데이터를 삭제 후 다시 시도해주세요.",
          variant: "destructive"
        })
        setIsLoading(false)
        return
      }

      // Proceed with migration
      const result = await migrateBlogPosts()
      
      if (result.success) {
        setMigrationStatus(`성공! ${result.data?.length}개의 포스트가 마이그레이션되었습니다.`)
        toast({
          title: "마이그레이션 완료",
          description: "모든 블로그 포스트가 성공적으로 Supabase로 이동되었습니다.",
        })
      } else {
        setMigrationStatus(`실패: ${result.error}`)
        toast({
          title: "마이그레이션 실패",
          description: "데이터 마이그레이션 중 오류가 발생했습니다.",
          variant: "destructive"
        })
      }
    } catch (error) {
      setMigrationStatus(`오류: ${error}`)
      toast({
        title: "오류 발생",
        description: "예상치 못한 오류가 발생했습니다.",
        variant: "destructive"
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>데이터 마이그레이션</CardTitle>
          <CardDescription>
            기존 블로그 포스트 데이터를 Supabase로 마이그레이션합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p>이 작업은 다음을 수행합니다:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>기존 하드코딩된 블로그 포스트를 Supabase 테이블로 이동</li>
              <li>각 포스트의 메타데이터 (제목, 내용, 태그 등) 보존</li>
              <li>조회수 및 기타 통계 정보 마이그레이션</li>
            </ul>
          </div>
          
          {migrationStatus && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">{migrationStatus}</p>
            </div>
          )}

          <Button 
            onClick={handleMigration} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? '마이그레이션 중...' : '데이터 마이그레이션 시작'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Migration